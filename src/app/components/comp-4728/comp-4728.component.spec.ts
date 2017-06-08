/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4728Component } from './comp-4728.component';

describe('Comp4728Component', () => {
  let component: Comp4728Component;
  let fixture: ComponentFixture<Comp4728Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4728Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4728Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
