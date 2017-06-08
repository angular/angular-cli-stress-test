/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service54Service } from './service-54.service';

describe('Service54Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service54Service]
    });
  });

  it('should ...', inject([Service54Service], (service: Service54Service) => {
    expect(service).toBeTruthy();
  }));
});
