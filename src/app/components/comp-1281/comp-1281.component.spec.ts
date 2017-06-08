/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1281Component } from './comp-1281.component';

describe('Comp1281Component', () => {
  let component: Comp1281Component;
  let fixture: ComponentFixture<Comp1281Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1281Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1281Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
