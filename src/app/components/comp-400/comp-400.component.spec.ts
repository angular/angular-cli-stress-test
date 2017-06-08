/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp400Component } from './comp-400.component';

describe('Comp400Component', () => {
  let component: Comp400Component;
  let fixture: ComponentFixture<Comp400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
