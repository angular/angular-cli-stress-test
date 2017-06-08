/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service428Service } from './service-428.service';

describe('Service428Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service428Service]
    });
  });

  it('should ...', inject([Service428Service], (service: Service428Service) => {
    expect(service).toBeTruthy();
  }));
});
