/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2652Component } from './comp-2652.component';

describe('Comp2652Component', () => {
  let component: Comp2652Component;
  let fixture: ComponentFixture<Comp2652Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2652Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2652Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
