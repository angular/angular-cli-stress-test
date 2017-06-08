/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2342Component } from './comp-2342.component';

describe('Comp2342Component', () => {
  let component: Comp2342Component;
  let fixture: ComponentFixture<Comp2342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
