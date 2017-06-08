/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2966Component } from './comp-2966.component';

describe('Comp2966Component', () => {
  let component: Comp2966Component;
  let fixture: ComponentFixture<Comp2966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
