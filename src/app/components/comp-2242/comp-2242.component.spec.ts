/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2242Component } from './comp-2242.component';

describe('Comp2242Component', () => {
  let component: Comp2242Component;
  let fixture: ComponentFixture<Comp2242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
