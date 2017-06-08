/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1243Component } from './comp-1243.component';

describe('Comp1243Component', () => {
  let component: Comp1243Component;
  let fixture: ComponentFixture<Comp1243Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1243Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
