/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp353Component } from './comp-353.component';

describe('Comp353Component', () => {
  let component: Comp353Component;
  let fixture: ComponentFixture<Comp353Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp353Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp353Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
