/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service980Service } from './service-980.service';

describe('Service980Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service980Service]
    });
  });

  it('should ...', inject([Service980Service], (service: Service980Service) => {
    expect(service).toBeTruthy();
  }));
});
