/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2950Component } from './comp-2950.component';

describe('Comp2950Component', () => {
  let component: Comp2950Component;
  let fixture: ComponentFixture<Comp2950Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2950Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2950Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
