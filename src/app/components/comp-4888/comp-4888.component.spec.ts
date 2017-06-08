/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4888Component } from './comp-4888.component';

describe('Comp4888Component', () => {
  let component: Comp4888Component;
  let fixture: ComponentFixture<Comp4888Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4888Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4888Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
