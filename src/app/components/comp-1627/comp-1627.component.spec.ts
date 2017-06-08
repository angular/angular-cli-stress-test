/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1627Component } from './comp-1627.component';

describe('Comp1627Component', () => {
  let component: Comp1627Component;
  let fixture: ComponentFixture<Comp1627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
