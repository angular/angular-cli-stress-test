/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2276Component } from './comp-2276.component';

describe('Comp2276Component', () => {
  let component: Comp2276Component;
  let fixture: ComponentFixture<Comp2276Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2276Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2276Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
