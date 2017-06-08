/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp111Component } from './comp-111.component';

describe('Comp111Component', () => {
  let component: Comp111Component;
  let fixture: ComponentFixture<Comp111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
