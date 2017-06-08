/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4313Component } from './comp-4313.component';

describe('Comp4313Component', () => {
  let component: Comp4313Component;
  let fixture: ComponentFixture<Comp4313Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4313Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4313Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
