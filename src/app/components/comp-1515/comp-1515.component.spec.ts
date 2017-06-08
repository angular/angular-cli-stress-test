/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1515Component } from './comp-1515.component';

describe('Comp1515Component', () => {
  let component: Comp1515Component;
  let fixture: ComponentFixture<Comp1515Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1515Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
