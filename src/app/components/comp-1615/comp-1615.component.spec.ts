/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1615Component } from './comp-1615.component';

describe('Comp1615Component', () => {
  let component: Comp1615Component;
  let fixture: ComponentFixture<Comp1615Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1615Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
