/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp703Component } from './comp-703.component';

describe('Comp703Component', () => {
  let component: Comp703Component;
  let fixture: ComponentFixture<Comp703Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp703Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp703Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
