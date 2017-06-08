/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1576Component } from './comp-1576.component';

describe('Comp1576Component', () => {
  let component: Comp1576Component;
  let fixture: ComponentFixture<Comp1576Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1576Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1576Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
