/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2263Component } from './comp-2263.component';

describe('Comp2263Component', () => {
  let component: Comp2263Component;
  let fixture: ComponentFixture<Comp2263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
