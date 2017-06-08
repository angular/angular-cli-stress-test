/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3867Component } from './comp-3867.component';

describe('Comp3867Component', () => {
  let component: Comp3867Component;
  let fixture: ComponentFixture<Comp3867Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3867Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3867Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
