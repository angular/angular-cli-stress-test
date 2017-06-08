/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4530Component } from './comp-4530.component';

describe('Comp4530Component', () => {
  let component: Comp4530Component;
  let fixture: ComponentFixture<Comp4530Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4530Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
