/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1460Component } from './comp-1460.component';

describe('Comp1460Component', () => {
  let component: Comp1460Component;
  let fixture: ComponentFixture<Comp1460Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1460Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1460Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
