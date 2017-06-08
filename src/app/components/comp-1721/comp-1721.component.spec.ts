/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1721Component } from './comp-1721.component';

describe('Comp1721Component', () => {
  let component: Comp1721Component;
  let fixture: ComponentFixture<Comp1721Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1721Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1721Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
