/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2369Component } from './comp-2369.component';

describe('Comp2369Component', () => {
  let component: Comp2369Component;
  let fixture: ComponentFixture<Comp2369Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2369Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2369Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
