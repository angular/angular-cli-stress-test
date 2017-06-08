/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1331Component } from './comp-1331.component';

describe('Comp1331Component', () => {
  let component: Comp1331Component;
  let fixture: ComponentFixture<Comp1331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
