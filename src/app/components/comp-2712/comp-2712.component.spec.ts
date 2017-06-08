/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2712Component } from './comp-2712.component';

describe('Comp2712Component', () => {
  let component: Comp2712Component;
  let fixture: ComponentFixture<Comp2712Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2712Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2712Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
