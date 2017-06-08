/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp632Component } from './comp-632.component';

describe('Comp632Component', () => {
  let component: Comp632Component;
  let fixture: ComponentFixture<Comp632Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp632Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
