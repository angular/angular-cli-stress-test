/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2279Component } from './comp-2279.component';

describe('Comp2279Component', () => {
  let component: Comp2279Component;
  let fixture: ComponentFixture<Comp2279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
