/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3098Component } from './comp-3098.component';

describe('Comp3098Component', () => {
  let component: Comp3098Component;
  let fixture: ComponentFixture<Comp3098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
