/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4327Component } from './comp-4327.component';

describe('Comp4327Component', () => {
  let component: Comp4327Component;
  let fixture: ComponentFixture<Comp4327Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4327Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4327Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
