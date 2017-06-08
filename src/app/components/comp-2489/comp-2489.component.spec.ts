/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2489Component } from './comp-2489.component';

describe('Comp2489Component', () => {
  let component: Comp2489Component;
  let fixture: ComponentFixture<Comp2489Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2489Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2489Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
