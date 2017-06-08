/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp933Component } from './comp-933.component';

describe('Comp933Component', () => {
  let component: Comp933Component;
  let fixture: ComponentFixture<Comp933Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp933Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp933Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
