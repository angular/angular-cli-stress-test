/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp524Component } from './comp-524.component';

describe('Comp524Component', () => {
  let component: Comp524Component;
  let fixture: ComponentFixture<Comp524Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp524Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp524Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
