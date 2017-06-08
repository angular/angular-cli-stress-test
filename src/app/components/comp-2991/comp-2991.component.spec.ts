/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2991Component } from './comp-2991.component';

describe('Comp2991Component', () => {
  let component: Comp2991Component;
  let fixture: ComponentFixture<Comp2991Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2991Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2991Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
