/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1311Component } from './comp-1311.component';

describe('Comp1311Component', () => {
  let component: Comp1311Component;
  let fixture: ComponentFixture<Comp1311Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1311Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1311Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
