/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2976Component } from './comp-2976.component';

describe('Comp2976Component', () => {
  let component: Comp2976Component;
  let fixture: ComponentFixture<Comp2976Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2976Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2976Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
