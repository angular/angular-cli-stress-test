/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3392Component } from './comp-3392.component';

describe('Comp3392Component', () => {
  let component: Comp3392Component;
  let fixture: ComponentFixture<Comp3392Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3392Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3392Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
