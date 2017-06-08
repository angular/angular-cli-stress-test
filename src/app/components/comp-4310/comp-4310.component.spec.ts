/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4310Component } from './comp-4310.component';

describe('Comp4310Component', () => {
  let component: Comp4310Component;
  let fixture: ComponentFixture<Comp4310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
