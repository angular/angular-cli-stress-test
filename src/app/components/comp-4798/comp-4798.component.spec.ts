/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4798Component } from './comp-4798.component';

describe('Comp4798Component', () => {
  let component: Comp4798Component;
  let fixture: ComponentFixture<Comp4798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
