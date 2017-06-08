/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4049Component } from './comp-4049.component';

describe('Comp4049Component', () => {
  let component: Comp4049Component;
  let fixture: ComponentFixture<Comp4049Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4049Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4049Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
