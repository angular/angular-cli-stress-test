/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1581Component } from './comp-1581.component';

describe('Comp1581Component', () => {
  let component: Comp1581Component;
  let fixture: ComponentFixture<Comp1581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
