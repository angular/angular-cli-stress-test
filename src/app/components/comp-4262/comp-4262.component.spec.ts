/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4262Component } from './comp-4262.component';

describe('Comp4262Component', () => {
  let component: Comp4262Component;
  let fixture: ComponentFixture<Comp4262Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4262Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4262Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
