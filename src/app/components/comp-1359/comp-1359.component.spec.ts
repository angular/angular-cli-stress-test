/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1359Component } from './comp-1359.component';

describe('Comp1359Component', () => {
  let component: Comp1359Component;
  let fixture: ComponentFixture<Comp1359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
