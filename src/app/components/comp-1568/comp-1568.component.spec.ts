/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1568Component } from './comp-1568.component';

describe('Comp1568Component', () => {
  let component: Comp1568Component;
  let fixture: ComponentFixture<Comp1568Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1568Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1568Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
