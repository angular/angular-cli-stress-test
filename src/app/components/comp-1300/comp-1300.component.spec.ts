/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1300Component } from './comp-1300.component';

describe('Comp1300Component', () => {
  let component: Comp1300Component;
  let fixture: ComponentFixture<Comp1300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
