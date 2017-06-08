/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2243Component } from './comp-2243.component';

describe('Comp2243Component', () => {
  let component: Comp2243Component;
  let fixture: ComponentFixture<Comp2243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
