/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp890Component } from './comp-890.component';

describe('Comp890Component', () => {
  let component: Comp890Component;
  let fixture: ComponentFixture<Comp890Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp890Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
