/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2682Component } from './comp-2682.component';

describe('Comp2682Component', () => {
  let component: Comp2682Component;
  let fixture: ComponentFixture<Comp2682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
