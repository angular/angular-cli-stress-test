/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1610Component } from './comp-1610.component';

describe('Comp1610Component', () => {
  let component: Comp1610Component;
  let fixture: ComponentFixture<Comp1610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
