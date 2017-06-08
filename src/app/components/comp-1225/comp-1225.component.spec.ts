/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1225Component } from './comp-1225.component';

describe('Comp1225Component', () => {
  let component: Comp1225Component;
  let fixture: ComponentFixture<Comp1225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
